import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteSystemTemplateRequest, DeleteSystemTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSystemTemplateCommandInput = DeleteSystemTemplateRequest;
export declare type DeleteSystemTemplateCommandOutput = DeleteSystemTemplateResponse & __MetadataBearer;
export declare class DeleteSystemTemplateCommand extends $Command<DeleteSystemTemplateCommandInput, DeleteSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeleteSystemTemplateCommandInput;
    constructor(input: DeleteSystemTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSystemTemplateCommandInput, DeleteSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
