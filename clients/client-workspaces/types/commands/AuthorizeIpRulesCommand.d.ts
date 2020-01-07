import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { AuthorizeIpRulesRequest, AuthorizeIpRulesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeIpRulesCommandInput = AuthorizeIpRulesRequest;
export declare type AuthorizeIpRulesCommandOutput = AuthorizeIpRulesResult & __MetadataBearer;
export declare class AuthorizeIpRulesCommand extends $Command<AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: AuthorizeIpRulesCommandInput;
    constructor(input: AuthorizeIpRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput>;
    private serialize;
    private deserialize;
}
