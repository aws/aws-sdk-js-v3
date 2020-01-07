import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { GetResourcePolicyInput, GetResourcePolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourcePolicyCommandInput = GetResourcePolicyInput;
export declare type GetResourcePolicyCommandOutput = GetResourcePolicyOutput & __MetadataBearer;
export declare class GetResourcePolicyCommand extends $Command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: GetResourcePolicyCommandInput;
    constructor(input: GetResourcePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
