import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SimulatePolicyResponse, SimulatePrincipalPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SimulatePrincipalPolicyCommandInput = SimulatePrincipalPolicyRequest;
export declare type SimulatePrincipalPolicyCommandOutput = SimulatePolicyResponse & __MetadataBearer;
export declare class SimulatePrincipalPolicyCommand extends $Command<SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: SimulatePrincipalPolicyCommandInput;
    constructor(input: SimulatePrincipalPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
