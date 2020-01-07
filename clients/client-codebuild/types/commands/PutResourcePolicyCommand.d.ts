import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { PutResourcePolicyInput, PutResourcePolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutResourcePolicyCommandInput = PutResourcePolicyInput;
export declare type PutResourcePolicyCommandOutput = PutResourcePolicyOutput & __MetadataBearer;
export declare class PutResourcePolicyCommand extends $Command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: PutResourcePolicyCommandInput;
    constructor(input: PutResourcePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
