import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeUserPoolRequest, DescribeUserPoolResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserPoolCommandInput = DescribeUserPoolRequest;
export declare type DescribeUserPoolCommandOutput = DescribeUserPoolResponse & __MetadataBearer;
export declare class DescribeUserPoolCommand extends $Command<DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeUserPoolCommandInput;
    constructor(input: DescribeUserPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput>;
    private serialize;
    private deserialize;
}
