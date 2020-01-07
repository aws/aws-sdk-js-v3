import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteNetworkProfileRequest, DeleteNetworkProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNetworkProfileCommandInput = DeleteNetworkProfileRequest;
export declare type DeleteNetworkProfileCommandOutput = DeleteNetworkProfileResponse & __MetadataBearer;
export declare class DeleteNetworkProfileCommand extends $Command<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteNetworkProfileCommandInput;
    constructor(input: DeleteNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
