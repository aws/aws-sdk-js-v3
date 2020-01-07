import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, CreateConfigRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConfigCommandInput = CreateConfigRequest;
export declare type CreateConfigCommandOutput = ConfigIdResponse & __MetadataBearer;
export declare class CreateConfigCommand extends $Command<CreateConfigCommandInput, CreateConfigCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CreateConfigCommandInput;
    constructor(input: CreateConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigCommandInput, CreateConfigCommandOutput>;
    private serialize;
    private deserialize;
}
