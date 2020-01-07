import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteProfileRequest, DeleteProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProfileCommandInput = DeleteProfileRequest;
export declare type DeleteProfileCommandOutput = DeleteProfileResponse & __MetadataBearer;
export declare class DeleteProfileCommand extends $Command<DeleteProfileCommandInput, DeleteProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteProfileCommandInput;
    constructor(input: DeleteProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfileCommandInput, DeleteProfileCommandOutput>;
    private serialize;
    private deserialize;
}
