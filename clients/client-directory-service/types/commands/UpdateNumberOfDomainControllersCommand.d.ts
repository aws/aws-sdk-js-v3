import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateNumberOfDomainControllersRequest, UpdateNumberOfDomainControllersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNumberOfDomainControllersCommandInput = UpdateNumberOfDomainControllersRequest;
export declare type UpdateNumberOfDomainControllersCommandOutput = UpdateNumberOfDomainControllersResult & __MetadataBearer;
export declare class UpdateNumberOfDomainControllersCommand extends $Command<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateNumberOfDomainControllersCommandInput;
    constructor(input: UpdateNumberOfDomainControllersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput>;
    private serialize;
    private deserialize;
}
