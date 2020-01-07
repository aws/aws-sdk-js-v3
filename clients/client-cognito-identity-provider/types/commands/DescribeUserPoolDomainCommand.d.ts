import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeUserPoolDomainRequest, DescribeUserPoolDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserPoolDomainCommandInput = DescribeUserPoolDomainRequest;
export declare type DescribeUserPoolDomainCommandOutput = DescribeUserPoolDomainResponse & __MetadataBearer;
export declare class DescribeUserPoolDomainCommand extends $Command<DescribeUserPoolDomainCommandInput, DescribeUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeUserPoolDomainCommandInput;
    constructor(input: DescribeUserPoolDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserPoolDomainCommandInput, DescribeUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
