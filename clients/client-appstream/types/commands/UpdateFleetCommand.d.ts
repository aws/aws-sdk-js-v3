import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateFleetRequest, UpdateFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFleetCommandInput = UpdateFleetRequest;
export declare type UpdateFleetCommandOutput = UpdateFleetResult & __MetadataBearer;
export declare class UpdateFleetCommand extends $Command<UpdateFleetCommandInput, UpdateFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: UpdateFleetCommandInput;
    constructor(input: UpdateFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFleetCommandInput, UpdateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
