import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeUserImportJobRequest, DescribeUserImportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserImportJobCommandInput = DescribeUserImportJobRequest;
export declare type DescribeUserImportJobCommandOutput = DescribeUserImportJobResponse & __MetadataBearer;
export declare class DescribeUserImportJobCommand extends $Command<DescribeUserImportJobCommandInput, DescribeUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeUserImportJobCommandInput;
    constructor(input: DescribeUserImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserImportJobCommandInput, DescribeUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
