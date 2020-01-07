import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddAttachmentsToSetCommandInput = AddAttachmentsToSetRequest;
export declare type AddAttachmentsToSetCommandOutput = AddAttachmentsToSetResponse & __MetadataBearer;
export declare class AddAttachmentsToSetCommand extends $Command<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput, SupportClientResolvedConfig> {
    readonly input: AddAttachmentsToSetCommandInput;
    constructor(input: AddAttachmentsToSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput>;
    private serialize;
    private deserialize;
}
