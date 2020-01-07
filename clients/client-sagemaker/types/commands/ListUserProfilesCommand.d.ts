import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListUserProfilesRequest, ListUserProfilesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserProfilesCommandInput = ListUserProfilesRequest;
export declare type ListUserProfilesCommandOutput = ListUserProfilesResponse & __MetadataBearer;
export declare class ListUserProfilesCommand extends $Command<ListUserProfilesCommandInput, ListUserProfilesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListUserProfilesCommandInput;
    constructor(input: ListUserProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserProfilesCommandInput, ListUserProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
