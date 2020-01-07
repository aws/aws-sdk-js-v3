import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourcePolicyCommandInput = DeleteResourcePolicyRequest;
export declare type DeleteResourcePolicyCommandOutput = DeleteResourcePolicyResponse & __MetadataBearer;
export declare class DeleteResourcePolicyCommand extends $Command<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: DeleteResourcePolicyCommandInput;
    constructor(input: DeleteResourcePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
