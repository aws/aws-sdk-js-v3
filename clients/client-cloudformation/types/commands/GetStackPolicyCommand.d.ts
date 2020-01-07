import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetStackPolicyInput, GetStackPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetStackPolicyCommandInput = GetStackPolicyInput;
export declare type GetStackPolicyCommandOutput = GetStackPolicyOutput & __MetadataBearer;
export declare class GetStackPolicyCommand extends $Command<GetStackPolicyCommandInput, GetStackPolicyCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: GetStackPolicyCommandInput;
    constructor(input: GetStackPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStackPolicyCommandInput, GetStackPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
