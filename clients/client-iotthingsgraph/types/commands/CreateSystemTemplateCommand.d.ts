import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemTemplateRequest, CreateSystemTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSystemTemplateCommandInput = CreateSystemTemplateRequest;
export declare type CreateSystemTemplateCommandOutput = CreateSystemTemplateResponse & __MetadataBearer;
export declare class CreateSystemTemplateCommand extends $Command<CreateSystemTemplateCommandInput, CreateSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: CreateSystemTemplateCommandInput;
    constructor(input: CreateSystemTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSystemTemplateCommandInput, CreateSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
