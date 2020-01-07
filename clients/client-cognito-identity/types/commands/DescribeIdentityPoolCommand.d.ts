import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DescribeIdentityPoolInput, IdentityPool } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIdentityPoolCommandInput = DescribeIdentityPoolInput;
export declare type DescribeIdentityPoolCommandOutput = IdentityPool & __MetadataBearer;
export declare class DescribeIdentityPoolCommand extends $Command<DescribeIdentityPoolCommandInput, DescribeIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DescribeIdentityPoolCommandInput;
    constructor(input: DescribeIdentityPoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityPoolCommandInput, DescribeIdentityPoolCommandOutput>;
    private serialize;
    private deserialize;
}
