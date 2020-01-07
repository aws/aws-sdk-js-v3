import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteFleetInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFleetCommandInput = DeleteFleetInput;
export declare type DeleteFleetCommandOutput = __MetadataBearer;
export declare class DeleteFleetCommand extends $Command<DeleteFleetCommandInput, DeleteFleetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteFleetCommandInput;
    constructor(input: DeleteFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFleetCommandInput, DeleteFleetCommandOutput>;
    private serialize;
    private deserialize;
}
