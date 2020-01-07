import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateMyUserProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMyUserProfileCommandInput = UpdateMyUserProfileRequest;
export declare type UpdateMyUserProfileCommandOutput = __MetadataBearer;
export declare class UpdateMyUserProfileCommand extends $Command<UpdateMyUserProfileCommandInput, UpdateMyUserProfileCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateMyUserProfileCommandInput;
    constructor(input: UpdateMyUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMyUserProfileCommandInput, UpdateMyUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
