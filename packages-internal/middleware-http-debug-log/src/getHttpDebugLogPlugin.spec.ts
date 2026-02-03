import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Readable } from "node:stream";
import { describe, expect, test as it, vi } from "vitest";

import { getHttpDebugLogPlugin } from "./getHttpDebugLogPlugin";

describe(getHttpDebugLogPlugin.name, () => {
  describe("JSON", () => {
    const httpRequest = new HttpRequest({
      headers: {
        header1: "headerValue1",
      },
      query: {
        query1: "queryValue1",
      },
      protocol: "https:",
      hostname: "localhost",
      path: "/path",
      body: JSON.stringify({ requestBody: "OK" }),
    });

    const httpResponse = new HttpResponse({
      headers: {
        responseHeader1: "responseHeaderValue1",
      },
      statusCode: 200,
      body: Readable.from('{ "responseBody": "OK" }'),
    });

    it("should pass http request and response data through a logger", async () => {
      const next = () => ({
        response: httpResponse,
      });
      const args = {
        request: httpRequest,
      };

      const mwStack = {
        addRelativeTo(middleware: (next: Function, context: any) => (args: any) => Promise<any>): void {
          middleware(next, {})(args);
        },
      } as any;

      const logger = {
        error: vi.fn(),
        warn: vi.fn(),
        info: vi.fn(),
        debug: vi.fn(),
      };

      const plugin = getHttpDebugLogPlugin({
        request: {
          client: true,
          command: true,
          method: true,
          url: true,
          headers: true,
          formatBody: true,
          body: true,
        },
        response: {
          statusCode: true,
          headers: true,
          body: true,
          formatBody: true,
        },
        logger: logger,
      });

      plugin.applyToStack(mwStack);

      // inner tested fn is un-awaitable.
      await new Promise((r) => setTimeout(r, 100));

      expect(vi.mocked(logger.debug).mock.calls.flat()).toEqual([
        "200 GET UnknownClient UnknownCommand",
        "    https://localhost/path",
        `    >> Request URL queryParams: {
      "query1": "queryValue1"
    }`,
        `    >>== Request Headers: {
      "header1": "headerValue1"
    }`,
        "    >>>=== Request Body Start ======",
        `    {
      "requestBody": "OK"
    }`,
        "    >>>=== Request Body End ======",
        `    <<== Response Headers: {
      "responseHeader1": "responseHeaderValue1"
    }`,
        "    <<<=== Response Body Start ======",
        `    {
      "responseBody": "OK"
    }`,
        "    <<<=== Response Body End ======",
      ]);
    });
  });

  describe("XML", () => {
    const httpRequest = new HttpRequest({
      headers: {
        header1: "headerValue1",
      },
      query: {
        query1: "queryValue1",
      },
      protocol: "https:",
      hostname: "localhost",
      path: "/path",
      body: `<?xml version="1.0" encoding="UTF-8"?><WebsiteConfiguration xmlns="https://prod.company.com/doc/2006-03-01/"><ErrorDocument><Key>string</Key></ErrorDocument><IndexDocument><Suffix>string</Suffix></IndexDocument><RedirectAllRequestsTo><HostName>string</HostName><Protocol>string</Protocol></RedirectAllRequestsTo><RoutingRules><RoutingRule><Condition><HttpErrorCodeReturnedEquals>string</HttpErrorCodeReturnedEquals><KeyPrefixEquals>string</KeyPrefixEquals></Condition><Redirect><HostName>string</HostName><HttpRedirectCode>string</HttpRedirectCode><Protocol>string</Protocol><ReplaceKeyPrefixWith>string</ReplaceKeyPrefixWith><ReplaceKeyWith>string</ReplaceKeyWith></Redirect></RoutingRule></RoutingRules></WebsiteConfiguration>`,
    });

    const httpResponse = new HttpResponse({
      headers: {
        responseHeader1: "responseHeaderValue1",
      },
      statusCode: 200,
      body: Readable.from(
        `<?xml version="1.0" encoding="UTF-8"?><BucketLoggingStatus><LoggingEnabled><TargetBucket>string</TargetBucket><TargetGrants><Grant><Grantee><DisplayName>string</DisplayName><EmailAddress>string</EmailAddress><ID>string</ID><xsi:type>string</xsi:type><URI>string</URI></Grantee><Permission>string</Permission></Grant></TargetGrants><TargetObjectKeyFormat><PartitionedPrefix><PartitionDateSource>string</PartitionDateSource></PartitionedPrefix><SimplePrefix></SimplePrefix></TargetObjectKeyFormat><TargetPrefix>string</TargetPrefix></LoggingEnabled></BucketLoggingStatus>`
      ),
    });

    it("should pass http request and response data through a logger", async () => {
      const next = () => ({
        response: httpResponse,
      });
      const args = {
        request: httpRequest,
      };

      const mwStack = {
        addRelativeTo(middleware: (next: Function, context: any) => (args: any) => Promise<any>): void {
          middleware(next, {})(args);
        },
      } as any;

      const plugin = getHttpDebugLogPlugin("lines headers formatted");

      plugin.applyToStack(mwStack);

      const spy = vi.spyOn(console, "debug").mockImplementation(() => {});

      // inner tested fn is un-awaitable.
      await new Promise((r) => setTimeout(r, 100));

      expect(vi.mocked(spy).mock.calls.flat()).toEqual([
        "200 GET UnknownClient UnknownCommand",
        "    https://localhost/path",
        `    >> Request URL queryParams: {
      "query1": "queryValue1"
    }`,
        `    >>== Request Headers: {
      "header1": "headerValue1"
    }`,
        "    >>>=== Request Body Start ======",
        `    <?xml version="1.0" encoding="UTF-8"?>
      <WebsiteConfiguration xmlns="https://prod.company.com/doc/2006-03-01/">
        <ErrorDocument>
          <Key>
            string
          </Key>
        </ErrorDocument>
        <IndexDocument>
          <Suffix>
            string
          </Suffix>
        </IndexDocument>
        <RedirectAllRequestsTo>
          <HostName>
            string
          </HostName>
          <Protocol>
            string
          </Protocol>
        </RedirectAllRequestsTo>
        <RoutingRules>
          <RoutingRule>
            <Condition>
              <HttpErrorCodeReturnedEquals>
                string
              </HttpErrorCodeReturnedEquals>
              <KeyPrefixEquals>
                string
              </KeyPrefixEquals>
            </Condition>
            <Redirect>
              <HostName>
                string
              </HostName>
              <HttpRedirectCode>
                string
              </HttpRedirectCode>
              <Protocol>
                string
              </Protocol>
              <ReplaceKeyPrefixWith>
                string
              </ReplaceKeyPrefixWith>
              <ReplaceKeyWith>
                string
              </ReplaceKeyWith>
            </Redirect>
          </RoutingRule>
        </RoutingRules>
      </WebsiteConfiguration>`,
        "    >>>=== Request Body End ======",
        `    <<== Response Headers: {
      "responseHeader1": "responseHeaderValue1"
    }`,
        "    <<<=== Response Body Start ======",
        `    <?xml version="1.0" encoding="UTF-8"?>
      <BucketLoggingStatus>
        <LoggingEnabled>
          <TargetBucket>
            string
          </TargetBucket>
          <TargetGrants>
            <Grant>
              <Grantee>
                <DisplayName>
                  string
                </DisplayName>
                <EmailAddress>
                  string
                </EmailAddress>
                <ID>
                  string
                </ID>
                <xsi:type>
                  string
                </xsi:type>
                <URI>
                  string
                </URI>
              </Grantee>
              <Permission>
                string
              </Permission>
            </Grant>
          </TargetGrants>
          <TargetObjectKeyFormat>
            <PartitionedPrefix>
              <PartitionDateSource>
                string
              </PartitionDateSource>
            </PartitionedPrefix>
            <SimplePrefix>
            </SimplePrefix>
          </TargetObjectKeyFormat>
          <TargetPrefix>
            string
          </TargetPrefix>
        </LoggingEnabled>
      </BucketLoggingStatus>`,
        "    <<<=== Response Body End ======",
      ]);
    });
  });
});
