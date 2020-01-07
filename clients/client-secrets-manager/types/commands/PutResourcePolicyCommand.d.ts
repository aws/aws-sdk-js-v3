import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutResourcePolicyCommandInput = PutResourcePolicyRequest;
export declare type PutResourcePolicyCommandOutput = PutResourcePolicyResponse & __MetadataBearer;
export declare class PutResourcePolicyCommand extends $Command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: PutResourcePolicyCommandInput;
    constructor(input: PutResourcePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
