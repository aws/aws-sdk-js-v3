import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConnectivityInfoCommandInput = UpdateConnectivityInfoRequest;
export declare type UpdateConnectivityInfoCommandOutput = UpdateConnectivityInfoResponse & __MetadataBearer;
export declare class UpdateConnectivityInfoCommand extends $Command<UpdateConnectivityInfoCommandInput, UpdateConnectivityInfoCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateConnectivityInfoCommandInput;
    constructor(input: UpdateConnectivityInfoCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConnectivityInfoCommandInput, UpdateConnectivityInfoCommandOutput>;
    private serialize;
    private deserialize;
}
