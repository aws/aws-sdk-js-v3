import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateEventTrackerRequest, CreateEventTrackerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEventTrackerCommandInput = CreateEventTrackerRequest;
export declare type CreateEventTrackerCommandOutput = CreateEventTrackerResponse & __MetadataBearer;
export declare class CreateEventTrackerCommand extends $Command<CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateEventTrackerCommandInput;
    constructor(input: CreateEventTrackerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
