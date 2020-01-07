import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeResourceServerRequest, DescribeResourceServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeResourceServerCommandInput = DescribeResourceServerRequest;
export declare type DescribeResourceServerCommandOutput = DescribeResourceServerResponse & __MetadataBearer;
export declare class DescribeResourceServerCommand extends $Command<DescribeResourceServerCommandInput, DescribeResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeResourceServerCommandInput;
    constructor(input: DescribeResourceServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceServerCommandInput, DescribeResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
