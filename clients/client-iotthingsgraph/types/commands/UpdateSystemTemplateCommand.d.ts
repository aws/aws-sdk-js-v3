import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UpdateSystemTemplateRequest, UpdateSystemTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSystemTemplateCommandInput = UpdateSystemTemplateRequest;
export declare type UpdateSystemTemplateCommandOutput = UpdateSystemTemplateResponse & __MetadataBearer;
export declare class UpdateSystemTemplateCommand extends $Command<UpdateSystemTemplateCommandInput, UpdateSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UpdateSystemTemplateCommandInput;
    constructor(input: UpdateSystemTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSystemTemplateCommandInput, UpdateSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
