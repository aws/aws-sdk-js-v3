import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DisableKeyRotationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableKeyRotationCommandInput = DisableKeyRotationRequest;
export declare type DisableKeyRotationCommandOutput = __MetadataBearer;
export declare class DisableKeyRotationCommand extends $Command<DisableKeyRotationCommandInput, DisableKeyRotationCommandOutput, KMSClientResolvedConfig> {
    readonly input: DisableKeyRotationCommandInput;
    constructor(input: DisableKeyRotationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableKeyRotationCommandInput, DisableKeyRotationCommandOutput>;
    private serialize;
    private deserialize;
}
