import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemInstanceRequest, GetSystemInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSystemInstanceCommandInput = GetSystemInstanceRequest;
export declare type GetSystemInstanceCommandOutput = GetSystemInstanceResponse & __MetadataBearer;
export declare class GetSystemInstanceCommand extends $Command<GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetSystemInstanceCommandInput;
    constructor(input: GetSystemInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
