import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { StartDeviceSyncRequest, StartDeviceSyncResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDeviceSyncCommandInput = StartDeviceSyncRequest;
export declare type StartDeviceSyncCommandOutput = StartDeviceSyncResponse & __MetadataBearer;
export declare class StartDeviceSyncCommand extends $Command<StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: StartDeviceSyncCommandInput;
    constructor(input: StartDeviceSyncCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput>;
    private serialize;
    private deserialize;
}
