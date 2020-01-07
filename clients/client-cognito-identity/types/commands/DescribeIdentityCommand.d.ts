import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DescribeIdentityInput, IdentityDescription } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIdentityCommandInput = DescribeIdentityInput;
export declare type DescribeIdentityCommandOutput = IdentityDescription & __MetadataBearer;
export declare class DescribeIdentityCommand extends $Command<DescribeIdentityCommandInput, DescribeIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DescribeIdentityCommandInput;
    constructor(input: DescribeIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityCommandInput, DescribeIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
