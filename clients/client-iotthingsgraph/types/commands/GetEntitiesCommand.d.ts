import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetEntitiesRequest, GetEntitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEntitiesCommandInput = GetEntitiesRequest;
export declare type GetEntitiesCommandOutput = GetEntitiesResponse & __MetadataBearer;
export declare class GetEntitiesCommand extends $Command<GetEntitiesCommandInput, GetEntitiesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: GetEntitiesCommandInput;
    constructor(input: GetEntitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEntitiesCommandInput, GetEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
