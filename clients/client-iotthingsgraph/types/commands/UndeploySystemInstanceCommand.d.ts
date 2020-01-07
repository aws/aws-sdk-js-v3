import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UndeploySystemInstanceRequest, UndeploySystemInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UndeploySystemInstanceCommandInput = UndeploySystemInstanceRequest;
export declare type UndeploySystemInstanceCommandOutput = UndeploySystemInstanceResponse & __MetadataBearer;
export declare class UndeploySystemInstanceCommand extends $Command<UndeploySystemInstanceCommandInput, UndeploySystemInstanceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UndeploySystemInstanceCommandInput;
    constructor(input: UndeploySystemInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UndeploySystemInstanceCommandInput, UndeploySystemInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
