import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFleetPortSettingsCommandInput = UpdateFleetPortSettingsInput;
export declare type UpdateFleetPortSettingsCommandOutput = UpdateFleetPortSettingsOutput & __MetadataBearer;
export declare class UpdateFleetPortSettingsCommand extends $Command<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateFleetPortSettingsCommandInput;
    constructor(input: UpdateFleetPortSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
