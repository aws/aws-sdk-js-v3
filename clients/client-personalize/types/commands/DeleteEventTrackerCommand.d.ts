import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteEventTrackerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventTrackerCommandInput = DeleteEventTrackerRequest;
export declare type DeleteEventTrackerCommandOutput = __MetadataBearer;
export declare class DeleteEventTrackerCommand extends $Command<DeleteEventTrackerCommandInput, DeleteEventTrackerCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DeleteEventTrackerCommandInput;
    constructor(input: DeleteEventTrackerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventTrackerCommandInput, DeleteEventTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
