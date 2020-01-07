import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SimulateCustomPolicyRequest, SimulatePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SimulateCustomPolicyCommandInput = SimulateCustomPolicyRequest;
export declare type SimulateCustomPolicyCommandOutput = SimulatePolicyResponse & __MetadataBearer;
export declare class SimulateCustomPolicyCommand extends $Command<SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: SimulateCustomPolicyCommandInput;
    constructor(input: SimulateCustomPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
