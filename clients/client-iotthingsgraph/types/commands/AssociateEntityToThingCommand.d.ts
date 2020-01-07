import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { AssociateEntityToThingRequest, AssociateEntityToThingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateEntityToThingCommandInput = AssociateEntityToThingRequest;
export declare type AssociateEntityToThingCommandOutput = AssociateEntityToThingResponse & __MetadataBearer;
export declare class AssociateEntityToThingCommand extends $Command<AssociateEntityToThingCommandInput, AssociateEntityToThingCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: AssociateEntityToThingCommandInput;
    constructor(input: AssociateEntityToThingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateEntityToThingCommandInput, AssociateEntityToThingCommandOutput>;
    private serialize;
    private deserialize;
}
