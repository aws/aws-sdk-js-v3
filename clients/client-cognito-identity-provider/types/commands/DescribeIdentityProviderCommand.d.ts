import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeIdentityProviderRequest, DescribeIdentityProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIdentityProviderCommandInput = DescribeIdentityProviderRequest;
export declare type DescribeIdentityProviderCommandOutput = DescribeIdentityProviderResponse & __MetadataBearer;
export declare class DescribeIdentityProviderCommand extends $Command<DescribeIdentityProviderCommandInput, DescribeIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeIdentityProviderCommandInput;
    constructor(input: DescribeIdentityProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityProviderCommandInput, DescribeIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
