import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeUserPoolClientRequest, DescribeUserPoolClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserPoolClientCommandInput = DescribeUserPoolClientRequest;
export declare type DescribeUserPoolClientCommandOutput = DescribeUserPoolClientResponse & __MetadataBearer;
export declare class DescribeUserPoolClientCommand extends $Command<DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeUserPoolClientCommandInput;
    constructor(input: DescribeUserPoolClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
