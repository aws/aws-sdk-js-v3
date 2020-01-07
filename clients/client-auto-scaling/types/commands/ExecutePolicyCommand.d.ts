import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ExecutePolicyType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExecutePolicyCommandInput = ExecutePolicyType;
export declare type ExecutePolicyCommandOutput = __MetadataBearer;
export declare class ExecutePolicyCommand extends $Command<ExecutePolicyCommandInput, ExecutePolicyCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: ExecutePolicyCommandInput;
    constructor(input: ExecutePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecutePolicyCommandInput, ExecutePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
