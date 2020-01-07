import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateKeyDescriptionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateKeyDescriptionCommandInput = UpdateKeyDescriptionRequest;
export declare type UpdateKeyDescriptionCommandOutput = __MetadataBearer;
export declare class UpdateKeyDescriptionCommand extends $Command<UpdateKeyDescriptionCommandInput, UpdateKeyDescriptionCommandOutput, KMSClientResolvedConfig> {
    readonly input: UpdateKeyDescriptionCommandInput;
    constructor(input: UpdateKeyDescriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateKeyDescriptionCommandInput, UpdateKeyDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
