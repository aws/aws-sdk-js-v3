import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DissociateEntityFromThingRequest, DissociateEntityFromThingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DissociateEntityFromThingCommandInput = DissociateEntityFromThingRequest;
export declare type DissociateEntityFromThingCommandOutput = DissociateEntityFromThingResponse & __MetadataBearer;
export declare class DissociateEntityFromThingCommand extends $Command<DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DissociateEntityFromThingCommandInput;
    constructor(input: DissociateEntityFromThingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput>;
    private serialize;
    private deserialize;
}
