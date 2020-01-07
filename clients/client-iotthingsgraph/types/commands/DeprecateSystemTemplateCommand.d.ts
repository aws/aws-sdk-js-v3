import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeprecateSystemTemplateRequest, DeprecateSystemTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeprecateSystemTemplateCommandInput = DeprecateSystemTemplateRequest;
export declare type DeprecateSystemTemplateCommandOutput = DeprecateSystemTemplateResponse & __MetadataBearer;
export declare class DeprecateSystemTemplateCommand extends $Command<DeprecateSystemTemplateCommandInput, DeprecateSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeprecateSystemTemplateCommandInput;
    constructor(input: DeprecateSystemTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateSystemTemplateCommandInput, DeprecateSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
