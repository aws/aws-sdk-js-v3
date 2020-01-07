import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { AddCommunicationToCaseRequest, AddCommunicationToCaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddCommunicationToCaseCommandInput = AddCommunicationToCaseRequest;
export declare type AddCommunicationToCaseCommandOutput = AddCommunicationToCaseResponse & __MetadataBearer;
export declare class AddCommunicationToCaseCommand extends $Command<AddCommunicationToCaseCommandInput, AddCommunicationToCaseCommandOutput, SupportClientResolvedConfig> {
    readonly input: AddCommunicationToCaseCommandInput;
    constructor(input: AddCommunicationToCaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddCommunicationToCaseCommandInput, AddCommunicationToCaseCommandOutput>;
    private serialize;
    private deserialize;
}
