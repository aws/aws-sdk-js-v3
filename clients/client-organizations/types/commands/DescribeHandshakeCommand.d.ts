import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeHandshakeRequest, DescribeHandshakeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHandshakeCommandInput = DescribeHandshakeRequest;
export declare type DescribeHandshakeCommandOutput = DescribeHandshakeResponse & __MetadataBearer;
export declare class DescribeHandshakeCommand extends $Command<DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeHandshakeCommandInput;
    constructor(input: DescribeHandshakeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput>;
    private serialize;
    private deserialize;
}
