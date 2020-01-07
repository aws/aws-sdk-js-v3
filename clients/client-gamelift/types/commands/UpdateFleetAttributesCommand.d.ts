import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateFleetAttributesInput, UpdateFleetAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFleetAttributesCommandInput = UpdateFleetAttributesInput;
export declare type UpdateFleetAttributesCommandOutput = UpdateFleetAttributesOutput & __MetadataBearer;
export declare class UpdateFleetAttributesCommand extends $Command<UpdateFleetAttributesCommandInput, UpdateFleetAttributesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateFleetAttributesCommandInput;
    constructor(input: UpdateFleetAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetAttributesCommandInput, UpdateFleetAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
