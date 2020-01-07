import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { UpdateDestinationInput, UpdateDestinationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDestinationCommandInput = UpdateDestinationInput;
export declare type UpdateDestinationCommandOutput = UpdateDestinationOutput & __MetadataBearer;
export declare class UpdateDestinationCommand extends $Command<UpdateDestinationCommandInput, UpdateDestinationCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: UpdateDestinationCommandInput;
    constructor(input: UpdateDestinationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDestinationCommandInput, UpdateDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
