import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemInstanceRequest, CreateSystemInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSystemInstanceCommandInput = CreateSystemInstanceRequest;
export declare type CreateSystemInstanceCommandOutput = CreateSystemInstanceResponse & __MetadataBearer;
export declare class CreateSystemInstanceCommand extends $Command<CreateSystemInstanceCommandInput, CreateSystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: CreateSystemInstanceCommandInput;
    constructor(input: CreateSystemInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSystemInstanceCommandInput, CreateSystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
