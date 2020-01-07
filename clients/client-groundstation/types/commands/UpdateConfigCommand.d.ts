import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, UpdateConfigRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConfigCommandInput = UpdateConfigRequest;
export declare type UpdateConfigCommandOutput = ConfigIdResponse & __MetadataBearer;
export declare class UpdateConfigCommand extends $Command<UpdateConfigCommandInput, UpdateConfigCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: UpdateConfigCommandInput;
    constructor(input: UpdateConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigCommandInput, UpdateConfigCommandOutput>;
    private serialize;
    private deserialize;
}
