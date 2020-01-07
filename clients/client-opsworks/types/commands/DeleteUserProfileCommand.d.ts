import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeleteUserProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserProfileCommandInput = DeleteUserProfileRequest;
export declare type DeleteUserProfileCommandOutput = __MetadataBearer;
export declare class DeleteUserProfileCommand extends $Command<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeleteUserProfileCommandInput;
    constructor(input: DeleteUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
