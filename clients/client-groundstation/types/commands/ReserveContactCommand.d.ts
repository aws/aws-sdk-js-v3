import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ContactIdResponse, ReserveContactRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReserveContactCommandInput = ReserveContactRequest;
export declare type ReserveContactCommandOutput = ContactIdResponse & __MetadataBearer;
export declare class ReserveContactCommand extends $Command<ReserveContactCommandInput, ReserveContactCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ReserveContactCommandInput;
    constructor(input: ReserveContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReserveContactCommandInput, ReserveContactCommandOutput>;
    private serialize;
    private deserialize;
}
