import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteFleetRequest, DeleteFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFleetCommandInput = DeleteFleetRequest;
export declare type DeleteFleetCommandOutput = DeleteFleetResult & __MetadataBearer;
export declare class DeleteFleetCommand extends $Command<DeleteFleetCommandInput, DeleteFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteFleetCommandInput;
    constructor(input: DeleteFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFleetCommandInput, DeleteFleetCommandOutput>;
    private serialize;
    private deserialize;
}
