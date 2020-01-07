import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemTemplateRequest, GetSystemTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSystemTemplateCommandInput = GetSystemTemplateRequest;
export declare type GetSystemTemplateCommandOutput = GetSystemTemplateResponse & __MetadataBearer;
export declare class GetSystemTemplateCommand extends $Command<GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetSystemTemplateCommandInput;
    constructor(input: GetSystemTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
